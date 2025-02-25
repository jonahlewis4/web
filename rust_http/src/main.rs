fn main() {
    let s = String::from("Hello");

   foobar(&s);

    let s1 = s;
}


fn foobar(param: &String){
    println!("{}", param);
}