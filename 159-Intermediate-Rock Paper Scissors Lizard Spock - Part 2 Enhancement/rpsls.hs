import System.Random

data Result = Win | Draw | Lose
data Hand = Rock | Paper | Scissors | Lizard | Spock deriving (Eq, Enum, Read, Show)

attacks :: Hand -> Hand -> Result
a `attacks` b
	| a == b = Draw
Scissors `attacks` Paper    = Win
Paper    `attacks` Scissors = Lose

Paper    `attacks` Rock     = Win
Rock     `attacks` Paper    = Lose

Rock     `attacks` Lizard   = Win
Lizard   `attacks` Rock     = Lose

Lizard   `attacks` Spock    = Win
Spock    `attacks` Lizard   = Lose

Spock    `attacks` Scissors = Win
Scissors `attacks` Spock    = Lose

Scissors `attacks` Lizard   = Win
Lizard   `attacks` Scissors = Lose

Lizard   `attacks` Paper    = Win
Paper    `attacks` Lizard   = Lose

Paper    `attacks` Spock    = Win
Spock    `attacks` Paper    = Lose

Spock    `attacks` Rock     = Win
Rock     `attacks` Spock    = Lose

Rock     `attacks` Scissors = Win
Scissors `attacks` Rock     = Lose

gameLoop :: StdGen -> IO ()
gameLoop randomNumberGenerator = do
	let computerHand :: Hand
	    (randomValue, newRandomNumberGenerator) = randomR (0,4) randomNumberGenerator
	    computerHand = toEnum randomValue
	putStrLn "Rock, Paper, Scissors, Lizard or Spock: "
	userHandString <- getLine
	if userHandString == "Quit"
	then return ()
	else do
		userHand <- return $ read userHandString
		putStrLn $ "Computer: " ++ show computerHand
		putStrLn $ case userHand `attacks` computerHand of
			Win -> "You win."
			Draw -> "Draw."
			Lose -> "Computer wins."
		gameLoop newRandomNumberGenerator

main :: IO ()
main = do
	randomNumberGenerator <- getStdGen
	gameLoop randomNumberGenerator
