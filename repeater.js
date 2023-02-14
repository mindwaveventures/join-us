function repeater(str, times){
    if(times<0)
        return "";
    if(times === 1)
        return str;
    else
        return str + repeater(str, times-1);
}

repeater("kkoll",9  )