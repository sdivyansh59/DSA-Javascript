#include <bits/stdc++.h>
using namespace std;

void findWays(int i,bool  colArr[], bool posDiag[], bool negDiag[], string ansStr, int n){
    // base case
    if (i == n){
        cout<<ansStr<<endl;
        return ;
    }
    // logic
 
        for( int j=0; j<n ; j++){
            if( colArr[j] && posDiag[i+j] && negDiag[(n-1)+(i-j)]) {
                //ansStr=ansStr;
                colArr[j] = false;
                posDiag[i + j] = false;
                negDiag[(n - 1) + (i - j)] = false;
                
                findWays(i + 1, colArr, posDiag, negDiag, ansStr, n);
                
             
                colArr[j] =true ;
                posDiag[i + j] = true;
                negDiag[(n - 1) + (i - j)] = true;
                
            }
        }
    
     


}


int main()
{

    int n;
    cin >> n;

    bool **arr = new bool*[n];
    for (int i = 0; i < n; i++)
    {
        arr[i] = new bool[n];
        for (int j = 0; j < n; j++)
        {
            arr[i][j] = false;
        }
    }

    bool *colArr  = new bool[n];
    bool *posDiag  = new bool[n];
    bool *negDiag  = new bool[n];

    string ansStr = " ";
    int i=0;
    findWays(i, colArr, posDiag, negDiag, ansStr, n);

    return 0;
}
