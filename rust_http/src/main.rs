use std::{
    io::BufReader,
    net::{TcpListener, TcpStream}

};
fn main() {
    let listener = TcpListener::bind("127.0.0.1:8080").unwrap();

    for stream in listener.incoming() {
        println!("Connection incoming");
    }
}

fn handle_request(stream: TcpStream) {
    let request = String::new();
    let reader = BufReader::new(&stream);

}

