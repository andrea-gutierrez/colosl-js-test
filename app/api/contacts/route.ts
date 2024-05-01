import { randomContact } from '@/utils';
import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(Array(10).fill({}).map(randomContact));
}
