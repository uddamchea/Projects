import random

min, max = 1, 6
loop = "yes"

while loop.lower() == "yes" or loop.lower() == "y":

    dice_to_roll = input("How many dice do you want to roll? ")

    if dice_to_roll.isdigit():
        results = [random.randint(min, max) for _ in range(int(dice_to_roll))]
        for result in results:
            print(result)
        loop = input("Roll again? ")
    else:
        print("Please enter a valid number!")

print("Game ended")

