from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

chatbot = ChatBot("Whisker")

trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train("chatterbot.corpus.english.greetings")

exit_conditions = (":q", "quit", "exit", "stop")

while True:
    query = input(">>> ")
    if query in exit_conditions:
        break
    else:
        print(f"Whisker: {chatbot.get_response(query)}")