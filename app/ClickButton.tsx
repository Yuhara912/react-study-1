interface ClickButtonProps{

    onClick:(event React.MouseEvent<HTMLButtonElement>) => void;
    //クリックイベントを受け取る関数型のProps
    label:string;
    //ボタンに表示する文字列のProps
}

function ClickButton({ onClick,label}:ClickButtonProps){
    return(
        //onClickイベントにPropsとして受け取った関数を設定
        <button onClick={onClick}>{label}</button>
    )
}

export default ClickButton;