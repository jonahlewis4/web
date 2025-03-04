use std::{
    io::{BufReader,BufRead},
    net::{TcpListener, TcpStream}

};
use std::io::Write;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:8080").unwrap();

    for stream in listener.incoming() {
        let stream = stream.unwrap();
        handle_request(stream);
    }
}

fn handle_request(mut stream: TcpStream) {
    let mut request = String::new();
    let mut reader = BufReader::new(&stream);
    reader.read_line(&mut request).unwrap();

    let mut response = String::new();
    let mut content = String::new();

    match request.as_str().trim() {
        "GET / HTTP/1.1" => {
            println!("get request");
            response = String::from("HTTP/1.1 200 OK");
            content = "<html><head><title>200 OK</title></head><body><h1>Hello, World!</h1></body></html>".to_string()

        }
        _ => {
            println!("forbidden request");
            response = String::from("HTTP/1.1 403 Forbidden");
            content = "<html><head><title>403 Forbidden</title></head>".to_string()
        }
    }

    stream
        .write_all(
            format!(
                "{}\r\nContent-Length: {}\r\n\r\n{}",
                response,
                content.len(),
                content,
            )
                .as_bytes(),
        )
        .unwrap();
    stream.flush().unwrap();



}

