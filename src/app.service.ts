import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): any {
		return {
			name: 'Ihor',
			age: 27
		};
	}
}
