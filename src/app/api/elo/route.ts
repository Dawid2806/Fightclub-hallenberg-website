import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest,res:NextResponse) {
  console.log('data', req.body)
  return new Response('Hello, Next.js!', {
    status: 200,
  })}