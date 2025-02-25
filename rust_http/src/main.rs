//you can only use one mutable reference. You can have as many immutable references as you'd like
fn main() {
    let s = String::from("Hello");

   foobar(&s);

    let s1 = &s;
    let s2 = &s;
    let s3 = &s;
}


fn foobar(param: &String){
    println!("{}", param);
}