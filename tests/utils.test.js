import { describe, expect, it } from 'vitest';
import { formatDate, getHostName, formatedDate } from './src/lib/utils';

describe('formatDate', () => {
  it('formats a date correctly', () => {
    expect(formatDate(6409952000000)).toEqual('2173-02-13');
  });

  it('pads single-digit month and day values correctly', () => {
    expect(formatDate(6409952000000)).toEqual('2173-02-13');
  });
});

describe('getHostName', () => {
  it('returns null when URL is empty', () => {
    expect(getHostName('')).toBeNull();
  });

  it('parses host name correctly for simple URLs', () => {
    expect(getHostName('https://www.example.com/path/to/resource.html')).toEqual('example.com');
  });

  it('parses host name correctly for complex URLs', () => {
    expect(getHostName('https://www.subdomain.example.co.uk:8080/path/to/resource.html?query=string#fragment')).toEqual('subdomain.example.co.uk');
  });
});

describe('formatedDate', () => {
  it('returns a formatted date string', () => {
    expect(formatDate(6409952000000)).toEqual('2173-02-13');
  });
});