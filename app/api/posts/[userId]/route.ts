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
        title: 'Sample Post 1',
        content: 'This is a sample post content for user ' + userId,
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        userId: userId,
        title: 'Sample Post 2',
        content: 'Another sample post for user ' + userId,
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