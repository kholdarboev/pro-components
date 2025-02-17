import { DefaultFooter } from '@ant-design/pro-layout';
import { mount, render } from 'enzyme';

describe('DefaultFooter test', () => {
  it('🦶 set title', () => {
    const wrapper = mount(<DefaultFooter links={false} />);
    expect(wrapper.find('.ant-pro-global-footer-links').exists()).toBeFalsy();
  });

  it('🦶 copyright support false', () => {
    const wrapper = render(<DefaultFooter copyright={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('🦶 links support false', () => {
    const wrapper = render(<DefaultFooter links={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('🦶 if copyright and links falsy both, should not to render nothing', () => {
    const wrapper = mount(<DefaultFooter copyright={false} links={false} />);
    expect(wrapper.find('.ant-pro-global-footer').exists()).toBeFalsy();
  });
});
