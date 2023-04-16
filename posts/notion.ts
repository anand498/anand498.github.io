import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';

export const POSTS = {
  'go-graphql-api': {
    date: new Date('2021-06-25').toDateString(),
    uri: 'shblog/Production-ready-API-with-Go-and-GraphQL-4ebc1ab551e447c2ac14261a61da6032',
  },
  'go-dokku-deployment': {
    date: new Date('2021-06-28').toDateString(),
    uri: 'https://anandpandey.notion.site/Anand-Pandey-s-Website-44775db0667a476388c81aa78364487e',
  },
  'styled-system': {
    date: new Date('2021-07-06').toDateString(),
    uri: 'shblog/Rapid-UI-development-with-styled-system-e1ce2f8a2e64485491b49e4e3a6a8f96',
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
