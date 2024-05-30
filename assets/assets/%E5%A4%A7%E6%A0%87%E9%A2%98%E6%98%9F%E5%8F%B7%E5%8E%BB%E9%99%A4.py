import os
import re

def process_md_files(folder_path):
    # 遍历文件夹及其子目录
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.md'):
                md_file_path = os.path.join(root, file)
                with open(md_file_path, 'r', encoding='utf-8') as f:
                    md_content = f.read()

                # 使用正则表达式匹配并替换标题中的*号
                new_content = re.sub(r'# \*\*(.*?)\*\*', r'# \1', md_content)

                # 将修改后的内容写回原文件
                with open(md_file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

if __name__ == "__main__":
    folder_path = r"C:\Users\lyz\Documents\code\flutter\Flutter-Web\assets"  # 替换为你的文件夹路径
    process_md_files(folder_path)
