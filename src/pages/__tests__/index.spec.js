import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from 'src/themes/theme';
import Home from '..';

describe('<Home />', () => {
  it('should create a snapshot for Home Page', () => {
    expect(
      renderer
        .create(
          <StyledThemeProvider theme={theme}>
            <Home />
          </StyledThemeProvider>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
  it('renders Home page without crashing', () => {
    const { getByTestId } = render(
      <StyledThemeProvider theme={theme}>
        <Home />
      </StyledThemeProvider>,
    );

    const pageWrapper = getByTestId('page-wrapper');
    expect(pageWrapper).toBeInTheDocument();
  });
});
