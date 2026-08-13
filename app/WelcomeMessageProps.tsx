interface WelcomeMessageProps{
    name: string;
    age: number;
    isActive: boolean;
    details:{city:string};
    // オブジェクト型Props
    tags: string[];
    renderExtra?:() => JSX.Element;
    // 関数を返す（JSXの要素）
}

function WelcomeMessage({name,age,isActive,details,tags,renderExtra}:WelcomeMessageProps){
    return(
        <div>
            <h2>Welcome,{name}!({age} years old)</h2>
            {/*boolean型のpropsに応じた条件付き表示 */}
            {isActive? <p>Status:Active</p> : <p>Status:Inactive</p>}
            {/*オブジェクトや配列のPropsを表示*/}
            <p>City:{details.city}</p>
            <p>Tags:{tags.join(',')}</p>
            {/*関数として渡されたPropsを呼び出し、レンダリング */}
            {renderExtra && renderExtra()}
        </div>
    )
}

export default WelcomeMessage;