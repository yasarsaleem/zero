import React from 'react';
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/Home/Hero';

//Test suit
describe('Hero component', () => {
    test('render Hero image', () => { render (<Hero />);
        const heroImage = screen.getAllByAltText('Hero');
expect(Hero).toBeInTheDocument();
expect(heroImage).toHaveAttribute('src','media/images/homeHero');
     });
});