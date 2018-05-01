import { FilterByFoodnamePipe } from './filter-by-foodname.pipe';

describe('FilterByFoodnamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByFoodnamePipe();
    expect(pipe).toBeTruthy();
  });
});
