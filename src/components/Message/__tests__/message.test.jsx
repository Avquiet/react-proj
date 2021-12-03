import { render, screen } from "@testing-library/react";
import { MessageList } from "../message";

describe("Message tests", () => {
    it("renders author and text", () => {
        const message = render(<MessageList message={{ text: "message", author: "author" }} />);

        const msgText = message.getByText("message");
        const authorText = message.getByText("author");
        expect(msgText).toBeInTheDocument();
        expect(authorText).toBeInTheDocument();
    });

    it("matches snapshot with author", () => {
        const message = render(<MessageList message={{ text: "message", author: "author" }} />);

        expect(message).toMatchSnapshot();
    });

    it("matches snapshot with no author", () => {
        const message = render(<MessageList message={{ text: "message", author: "author" }}/ >);

        expect(message).toMatchSnapshot();
    });
});