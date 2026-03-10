import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();
const KEY = 'review-comments';

export async function GET() {
  try {
    const comments = await redis.get(KEY) || {};
    return Response.json(comments);
  } catch (e) {
    return Response.json({}, { status: 200 });
  }
}

export async function POST(request) {
  try {
    const { action, blockKey, comment, commentId, newText } = await request.json();

    const comments = await redis.get(KEY) || {};

    if (action === 'add') {
      if (!comments[blockKey]) comments[blockKey] = [];
      comments[blockKey].push({
        id: Date.now(),
        text: comment,
        author: 'Steve',
        time: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
      });
    }

    if (action === 'edit') {
      if (comments[blockKey]) {
        comments[blockKey] = comments[blockKey].map(c =>
          c.id === commentId ? { ...c, text: newText, edited: true } : c
        );
      }
    }

    if (action === 'delete') {
      if (comments[blockKey]) {
        comments[blockKey] = comments[blockKey].filter(c => c.id !== commentId);
      }
    }

    if (action === 'clear') {
      await redis.set(KEY, {});
      return Response.json({ ok: true, comments: {} });
    }

    await redis.set(KEY, comments);
    return Response.json({ ok: true, comments });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
