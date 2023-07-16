import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';

export const POSTS = {
  'test-test': {
    date: new Date('2021-06-28').toDateString(),
    uri: 'https://anandpandey.notion.site/Anand-Pandey-s-Website-44775db0667a476388c81aa78364487e',
  },
  'test-test2': {
    date: new Date('2021-06-28').toDateString(),
    uri: 'https://anandpandey.notion.site/Anand-Pandey-s-Website-44775db0667a476388c81aa78364487e',
  },
  
};

export interface PageInfo {
  title: string;
  cover?: string;
  coverPosition?: number;
}

export interface Page extends PageInfo {
  uri: string;
  date: string;
}

export const getPageInfo = (page: ExtendedRecordMap): PageInfo => {
  const info: PageInfo = {
    title: getPageTitle(page),
  };

  const block = Object.values(page.block)[0].value;
  if (block.type === 'page' && block.format?.page_cover) {
    info.coverPosition = block.format.page_cover_position;
    info.cover =
      'https://www.notion.so/image/' +
      encodeURIComponent(block.format.page_cover) +
      '?table=block&id=' +
      block.id;
  }

  return info;
};
