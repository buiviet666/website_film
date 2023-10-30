import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    .logo {
        color: #fff;
        font-size: 3rem;
        letter-spacing: 2px;
        background: linear-gradient(to right, #eaff00, #f8d4d4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .navLinks, .loginBtn {
        margin-left: auto;
    }

    .links {
        font-size: 20px;
        color: #ffffffe4;
    }

    @media (max-width: 1060px) {
        .logo {
            font-size: 1.6rem;
        }

        .links, .loginBtn {
            font-size: 12px;
        }
    }
`;

export const MovieShowsWrapper = styled.div`

`;