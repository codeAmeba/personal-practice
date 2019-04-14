using System;

namespace test1
{
    class Program
    {
        static void Main(string[] args)
        {
            string coinPoket = "주머니 속의 동전: ";
            Console.Write(coinPoket);
            int coinA = 10;
            Console.WriteLine(coinA);

            string coinAram = "아람이가 가져간 동전: ";
            Console.Write(coinAram);
            int coinB = coinA / 2 - 1;
            Console.WriteLine(coinB);

            string coinUram = "우람이가 가져간 동전: ";
            Console.Write(coinUram);
            int coinC = coinA - coinB;
            coinC = coinC / 2 + 2;
            Console.WriteLine(coinC);

            string coinPoketFinal = "주머니에 남은 동전: ";
            Console.Write(coinPoketFinal);
            int coinD = coinA - coinB - coinC;
            Console.WriteLine(coinD);


            


       

        }
    }
}
