import {
    HeaderWrapper,
    PhoneSection,
    PhoneSectionDiv,
    HeaderH2,
    HeaderH3,
    Hr,
    HeaderP
} from "./styles";

import Button from "../Button";

const Header = () => (
    <HeaderWrapper>
        <PhoneSection>
            <PhoneSectionDiv>
                <HeaderH2>
                    Our App Is Ready For You! Take A Look & Enjoy.
                </HeaderH2>
                <Hr />
                <HeaderH3>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </HeaderH3>
                <HeaderP>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                </HeaderP>
                <Button text='Learn More' />
            </PhoneSectionDiv>
        </PhoneSection>
    </HeaderWrapper>
)

export default Header
