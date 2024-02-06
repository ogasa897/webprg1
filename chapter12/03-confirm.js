const result = consfirm('本当に削除してよいですか？');
if(result){
    console.log('削除しました');
}else{
    console.log('キャンセルしました');
}