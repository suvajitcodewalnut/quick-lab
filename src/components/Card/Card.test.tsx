// Modules
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import type { CardPropTypes } from "./Card.types";

const renderComponent = (
  title: string,
  description: string,
  priority: string,
  assignedTo: string,
  additional?: Partial<CardPropTypes>
) =>
  render(
    <Card
      title={title}
      description={description}
      priority={priority}
      assignedTo={assignedTo}
      markComplete={vi.fn()}
      deleteTicket={vi.fn()}
      {...additional}
    />
  );

describe("Card", () => {
  it("should render the Card component properly", () => {
    renderComponent(
      "Login fix",
      "Users are unable to login",
      "High",
      "suvajit@codewalnut.com"
    );
  });

  it('should render the "delete" button', () => {
    renderComponent(
      "Login fix",
      "Users are unable to login",
      "High",
      "suvajit@codewalnut.com"
    );
    expect(
      screen.getByRole("button", { name: "button-delete" })
    ).toBeInTheDocument();
  });

  it('should render the "mark as complete" button', () => {
    renderComponent(
      "Login fix",
      "Users are unable to login",
      "High",
      "suvajit@codewalnut.com"
    );
    expect(
      screen.getByRole("button", { name: "button-mark-as-complete" })
    ).toBeInTheDocument();
  });
});
