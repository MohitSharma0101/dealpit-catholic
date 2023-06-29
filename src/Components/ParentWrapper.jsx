import styled from '@emotion/styled'
import { BREAKPOINT, mq } from '../Utils/MediaQueries';

const ParentWrapper = styled.div`
    max-width: 80%;
    margin: 0 auto;

    ${mq(BREAKPOINT.large)}  {
        max-width: 100%;
        margin: 0 12px;
    }
`
export default ParentWrapper;