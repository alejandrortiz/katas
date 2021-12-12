
def run() -> None:
    print('PART A: {}'.format(end_position(content())))
    print('PART B: {}'.format(end_poisition_with_aim(content())))
    
def end_position(instructions) -> int:
    width = 0;
    height = 0;
    
    for instruction in instructions:
        if 'forward' in instruction:
            width += instruction_number(instruction, 'forward');
        elif 'up' in instruction: 
            height -= instruction_number(instruction, 'up');
        elif 'down' in instruction:
            height += instruction_number(instruction, 'down');
    
    return width * height;
    

def end_poisition_with_aim(instructions) -> int:
    horizontal = 0;
    depth = 0;
    aim = 0;
    
    for instruction in instructions:
        if 'forward' in instruction:
            move = instruction_number(instruction, 'forward');
            
            horizontal += move;
            aim += depth * move;
            
        elif 'up' in instruction: 
            depth -= instruction_number(instruction, 'up');
        elif 'down' in instruction:
            depth += instruction_number(instruction, 'down');
            
    return aim * horizontal;


def instruction_number(instruction: str, action: str) -> int:
    return int(instruction.replace(action, '').strip());


def content() -> list:
    file = open('exec_02.txt', 'r');
    content = file.read().splitlines();
    file.close();
    
    return content;


run();