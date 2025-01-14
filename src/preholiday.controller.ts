import { Controller, Get, Query } from '@nestjs/common';
import { PreHolidayService } from './services/preholiday.service';
import {  OpenAI } from 'openai';

@Controller('preholiday')
export class PreHolidayController {
  private openai: OpenAI;
  private readonly DEFAULT_COMPLETION_MODEL = 'gpt-4'
  private readonly MAX_TOKENS = 100;

  constructor(private readonly preHolidayService: PreHolidayService) {
      this.openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})
  }

  @Get('actions')
  async getPreHolidayActions(@Query('location') location: string, ) {
    try {
      const actions = await this.preHolidayService.getActionsForLocation(location);
      const query = ``
      if (actions.length === 0) {
        return { message: `No actions found for location ${location}` };
      }

      const formattedActions = actions
        .map((action, idx) => `${idx + 1}. ${action.description}`)
        .join('\n');

      // Use OpenAI to format the response
      const chatResponse = await this.openai.completions.create({
        model: this.DEFAULT_COMPLETION_MODEL,
        prompt: query,
        max_tokens: this.MAX_TOKENS,
        });
 
    return chatResponse.choices[0].text.trim();

    } catch (error) {
      return { error: error.message };
    }
  }
}
