import { render } from "@testing-library/react";
import  Home from '../main';
import { SignForm } from "../SignForm/main";

describe("Home component tests", () => {
    it("renders Sign Form", () => {
        const handleSignIn = render(<SignForm onSubmit={handleSignIn} />);
        const findForm = handleSignIn.getByRole(handleSignIn);
        expect(findForm).toBeCalled(Home);
    })
})