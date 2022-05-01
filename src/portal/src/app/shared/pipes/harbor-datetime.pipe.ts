import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from "@angular/common";
import { DEFAULT_LANG_LOCALSTORAGE_KEY, DefaultLang } from "../entities/shared.const";
import { isSupportedLanguage } from '../units/shared.utils';

@Pipe({
  name: 'harborDatetime',
  pure: false
})
export class HarborDatetimePipe implements PipeTransform {

  transform(value: any, format?: string): string {
    const savedLang = localStorage.getItem(DEFAULT_LANG_LOCALSTORAGE_KEY);
    const lang = isSupportedLanguage(savedLang) ? savedLang : DefaultLang;
    // default format medium
    return new DatePipe(lang).transform(value, format ? format : 'medium');
  }
}
