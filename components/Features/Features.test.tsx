import { render } from "@testing-library/react";
import { getByRole, getByText, screen } from '@testing-library/dom';
import Features from "./Features";
import features from "./featuresList";

describe('Features component', () => {
  beforeEach(() => {
    render(<Features />);    
  });

  it('renders header', () => {
    const header = screen.getByRole('heading', {
      level: 1,
    })

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('What\'s different about Manage?')
  })

  it('renders paragraph', () => {
    const paragraph = screen.getByText('Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.')

    expect(paragraph).toBeInTheDocument();
  })

  it('renders list', () => {
    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument();
  })

  it('renders list items', () => {
    const listItems = screen.getAllByRole('listitem')

    listItems.forEach((listItem, index) => {
      const { number, title, content } = features[index];
      expect(listItem).toBeInTheDocument();
      
      const titleElement = getByRole(listItem, 'heading', { level: 2 });
      const numberElement = getByText(listItem, number);
      const contentElement = getByText(listItem, content);

      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toContainElement(numberElement);
      expect(titleElement).toHaveTextContent(title);

      expect(contentElement).toBeInTheDocument();
      expect(contentElement).toHaveTextContent(content);
    })
  })
})