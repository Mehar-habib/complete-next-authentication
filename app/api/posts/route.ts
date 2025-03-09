import { NextResponse } from "next/server";

interface PostProps {
  id: number;
  name: string;
  email: string;
  age: number;
  slug: string;
}
const posts: PostProps[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 28,
    slug: "john-doe",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 25,
    slug: "jane-smith",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michaelj@example.com",
    age: 32,
    slug: "michael-johnson",
  },
  {
    id: 4,
    name: "Habib Ur Rehman",
    email: "michaelj@example.com",
    age: 32,
    slug: "michael-johnson",
  },
];
// Handle GET requests
export async function GET() {
  // return JSON
  return NextResponse.json(posts, { status: 200 });
}

// Handle POST requests
export async function POST(request: Request) {
  // return JSON data
  try {
    // parse the request body
    const body = await request.json();
    // create a new body
    const newPost: PostProps = {
      id: posts.length + 1,
      name: body.name,
      email: body.email,
      age: body.age,
      slug: body.slug,
    };
    posts.push(newPost);
    // return the new post
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.log(error);
    // return an error message
    return NextResponse.json(
      { error: "invalid request body" },
      { status: 400 }
    );
  }
}
