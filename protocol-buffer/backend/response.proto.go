syntax = "proto3";

package message;

option go_package = "github.com/jonahlewis4/web/proto";

message Message {
	string message = 1;
	int32 num = 2;
}