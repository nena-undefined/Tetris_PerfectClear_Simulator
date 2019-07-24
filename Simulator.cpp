#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

int main(){

  ifstream ifs("tumo.txt");
  if(ifs.fail()){
    cerr << "Failed to open tumo.txt." << endl;
    return -1;
  }

  int buf_size = 840;
  int tumo_num = 7;

  //ツモのサイズは
  // 5 * 4のサイズでやる??
  string tumo[3][4] ={
  {
  "  #  ",
  "  #  ",
  "  #  ",
  "  #  "
  },{
  "     ",
  "   # ",
  " ### "
  "     "
  },{
  "     ",
  " ##  ",
  " ##  ",
  "     "
  }

  };



  string s;
  getline(ifs, s);

  int id;
  vector<vector<int>> v(buf_size, vector<int>(tumo_num));
  vector<int> can_perfect(buf_size);

  for(int i = 0; i < buf_size; ++i){
    ifs >> id;
    for(int j = 0; j < tumo_num; ++j){
      ifs >> v[i][j];
    }
    ifs >> can_perfect[i];
  }

  for(int i = 0; i < buf_size; ++i){
    if(can_perfect[i]){
      cout << i + 1 << endl;
    }
  }
  
  for(int i = 0; i < 3; ++i){
    for(int j = 0; j < 4; ++j){
      cout << tumo[i][j] <<endl;
    }
    cout << endl;
  }

  return 0;

}
