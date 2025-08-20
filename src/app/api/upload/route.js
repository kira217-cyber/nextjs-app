import { NextResponse } from "next/server"

export async function POST(request) {
  const formData = await request.formData()
  const imageFile = formData.get("image")
  
  if (!imageFile) {
    return NextResponse.json({ error: "No image provided" }, { status: 400 })
  }

  const imgbbApiKey = process.env.IMGBB_API_KEY

  const uploadData = new FormData()
  uploadData.append("image", imageFile)

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
    method: "POST",
    body: uploadData
  })
  const data = await res.json()
  
  return NextResponse.json({ url: data.data.url })
}
