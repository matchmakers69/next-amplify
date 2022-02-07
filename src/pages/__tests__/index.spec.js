import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "..";

describe("<Home />", () => {
    it("should create a snapshot for Home Page", () => {
        expect(renderer.create(<Home />).toJSON()).toMatchSnapshot();
    });
    it("renders Home page without crashing", () => {
        const { getByTestId } = render(<Home />);

        const pageWrapper = getByTestId("page-wrapper");
        expect(pageWrapper).toBeInTheDocument();
    });
});
