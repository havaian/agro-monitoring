import os
import json
components_path = r'src\components\navbar\main_component.vue'
stat_text_path = r'src\components\pages\stat_component.vue'
page_path = r'src\components\pages'

nl_obj = False
general = False
nl_child = False

def write_static_html(path):
    with open(stat_text_path) as static_page_f:
        st_page_html = static_page_f.read()
    with open(path, 'w', encoding='utf-8') as page_f:
        page_f.write(st_page_html)

def write_route(route_name:str, last_obj_name):
    with open("routes.json", 'a', encoding='utf-8') as route_f:
        routes = {
            'path': '/' + route_name,
            'name': route_name.capitalize(),
            'component': last_obj_name.capitalize() + "Component"
        }
        route_f.write(json.dumps(routes))

def pizdec(line):
    obj_name = line.split(":")[0].strip()
    obj_name = line.split(":")[0].strip() if obj_name != 'key' else line.split(":")[1].strip().replace("\'", "").replace(",","")
    if obj_name == "farmer_regions_component":
        print('asd')
    list_of_pages = [page.replace('_component.vue', '') for page in os.listdir(page_path)]
    if obj_name not in list_of_pages:
        print(obj_name)
        new_page_path = os.path.join(page_path, obj_name + '_component.vue')
        write_static_html(new_page_path)
    return obj_name

def write_routes_and_html():
    with open(components_path, 'r', encoding='utf8') as f:
        for line in f.readlines():
            if nl_child and line.strip() in ['}', '}\n']:
                nl_child = False
                continue
            if general and len(line.split(":")) == 2 and line.split(":")[0].strip() == 'children':
                nl_child = True
                continue
            if nl_child:
                if len(line.split(":")) == 2 and line.split(":")[1].strip() in ['{','{\n']:
                    route_name = line.split(":")[0].strip()
                    write_route(route_name, last_obj_name)
                    pizdec(line)
                    continue
            if nl_obj:
                obj_name = pizdec(line)
                nl_obj = False
                last_obj_name = obj_name
                continue
            if line.strip() in ["menuItems: {", "menuItems: {\n"]:
                general = True
                nl_obj = True
                print("found")
                continue
            if line.strip() in ['},\n', '},']:
                continue
            # print(line.split(": "))
            if general and len(line.split(":")) == 2 and line.split(":")[1].strip() in ['{', '{\n']:
                print("*"*10)
                obj_name = pizdec(line)
                nl_obj = False
                last_obj_name = obj_name
                continue
            if line.strip() in ["};\n", "};"]:
                break
            
def replace_static_to_widget(example):
    page_listdir = os.listdir(page_path)
    page_listdir.pop(page_listdir.index(example))
    with open(os.path.join(page_path, example)) as f:
        widget_text = f.read()
    for page in page_listdir:
        with open(os.path.join(page_path, page), 'w', encoding='utf-8') as page_f:
            page_f.write(widget_text)

replace_static_to_widget("stat_component.vue")