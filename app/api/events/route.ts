import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text();

    const id = req.headers.get('svix-id');
    const timestamp = req.headers.get('svix-timestamp');
    const signature = req.headers.get('svix-signature');

    if (!id || !timestamp || !signature) {
      return new NextResponse('Missing webhook headers', { status: 400 });
    }

    const event = resend.webhooks.verify({
      payload,
      headers: { id, timestamp, signature },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET!,
    });
    console.log('Webhook received:', event.type);
  } catch {
    return new NextResponse('Invalid webhook', { status: 400 });
  }
}
