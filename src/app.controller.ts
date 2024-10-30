// src/app.controller.ts
import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('reset-password')
  @Render('test') // HTML 템플릿 파일을 지정
  resetPasswordPage(@Query('userId') userId: number) {
    return { userId }; // 템플릿에 userId 전달. 버튼 클릭후 password화 함께 Body값으로 요청(POST)
  }

  // static 웹 페이지에서 버튼 클릭시 요청하는 API
  @Post()
  getHello(@Body() body: { userId: number; password: string }): string {
    return `
    <h1>Hello World</h1>
    <p>Your ID is ${body.userId}</p>
    <p>Your Password is ${body.password}</p>
    `;
  }
}
