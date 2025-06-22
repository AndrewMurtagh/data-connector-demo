import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;

    // Validate userId
    if (!userId || userId.trim() === '') {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // TODO: Replace with actual data fetching logic
    // This is a mock response - you would typically fetch from a database
    const mockPosts = [
      {
        id: 1,
        userId: userId,
        title: 'Win a free product',
        template: 'default',
        content: 'Just respond to this post to win a free product!',
        state: 'published',
        scheduledAt: null,
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        userId: userId,
        title: 'New Product Launch',
        template: 'productLaunch',
        content: 'Today we are so excited to announce the launch of our new product!',
        state: 'scheduled',
        scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
        publishedAt: null,
        createdAt: new Date().toISOString(),
      },
      {
        id: 3,
        userId: userId,
        title: 'Did you know?',
        template: 'default',
        content: 'Did you know that you can get a discount by sharing this post?',
        state: 'published',
        scheduledAt: null,
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        createdAt: new Date().toISOString(),
      },
    ];

    return NextResponse.json({
      success: true,
      data: mockPosts,
      userId: userId,
    });

  } catch (error) {
    console.error('Error fetching posts for user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}