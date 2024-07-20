export const LeftCurlyBracket = () => <span>&#x7b;</span> 
export const SingleQuote = () => <span>&#39;</span>
export const LeftSquareBracket = () => <span>&#91;</span>
export const RightSquareBracket = () => <span>&#93;</span>
export const Comma = () => <span>&#44;</span>
export const WhiteSpace = () => <span>&nbsp;</span>
export const EqualSign = () => <span>&#61;</span>
export const Colon = () => <span>&#58;</span>
export const SemiColon = () => <span>&#59;</span>
export const Tab = () => <span>&#9;</span>
export const LeftParanthesis = () => <span>&#40;</span>
export const RightParanthesis = () => <span>&#40;</span>


export const SingleQuoteWrapper = ({item}: {item : string}) => <span>&#39;{item}&#39;</span> 
export const SquareBracketWrapper = ({children}: {children : React.ReactNode}) => <span>&#91; {children} &#93;</span> 
export const EmptyParanthesis = () => <span>&#40; &#40;</span>
