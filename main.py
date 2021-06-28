# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def rainbow(inputText):
    with open("rainbow.txt", 'w') as outputFile:

        count = 0
        outputText = ""

        for i in inputText:
            if inputText == " ":
                continue

            if count == 0:
                outputText = outputText + "<enemy>" + i + "</>"
                count += 1
                continue

            if count == 1:
                outputText = outputText + "<system>" + i + "</>"
                count += 1
                continue

            if count == 2:
                outputText = outputText + "<notification>" + i + "</>"
                count += 1
                continue

            if count == 3:
                outputText = outputText + "<team>" + i + "</>"
                count += 1
                continue

            if count == 4:
                outputText = outputText + "<warning>" + i + "</>"
                count = 0
                continue

        outputFile.write(outputText)


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    rainbow(input("Enter in the text you want to be rainbow: "))

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
