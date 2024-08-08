from transformers import GPT2Tokenizer, GPT2LMHeadModel
import torch

# Load the tokenizer and model
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2LMHeadModel.from_pretrained('gpt2')

def summarize_document(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Tokenization and truncation
        inputs = tokenizer.encode("summarize: " + content, return_tensors='pt', max_length=512, truncation=True)

        # Generate the summary
        outputs = model.generate(
            inputs,
            max_length=150,  # Maximum length of the summary
            length_penalty=2.0,  # Controls the length of the summary (higher value means shorter summary)
            num_beams=4,  # Number of beams for beam search (increases diversity)
            early_stopping=True,  # Stops the generation when the summary is complete
            no_repeat_ngram_size=3  # Prevents repeating the same 3-gram sequences
        )
        
        summary = tokenizer.decode(outputs[0], skip_special_tokens=True)
        return summary

    except Exception as e:
        print(f"Error in summarize_document: {e}")
        return "An error occurred while summarizing the document."
