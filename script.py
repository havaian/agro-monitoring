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

def write_route(route_name:str):
    with open("routes.json", 'a', encoding='utf-8') as route_f:
        routes = {
            'path': '/' + route_name,
            'name': route_name.capitalize(),
            'component': route_name.capitalize() + "Component"
        }
        route_f.write(json.dumps(routes))
write_static_html(r'src\components\pages\asd.vue')
with open(components_path, 'r', encoding='utf8') as f:
    for line in f.readlines():
        if nl_child and line.strip() == '}\n':
            nl_child = False
            continue
        if len(line.split(":")) == 2 and line.split(":")[0].strip() == 'children' and general:
            nl_child = True
            continue
        if nl_child:
            if len(line.split(":")) == 2 and line.split(":")[1].strip() == '{':
                route_name = line.split(":")[0].strip()
                write_route(route_name)
                continue
        if nl_obj:
            obj_name = line.split(":")[0].strip()
            for page in os.listdir(page_path):
                if not page.startswith(obj_name):
                    print(obj_name)
                    new_page_path = os.path.join(page_path, obj_name + '_component.vue')
                    write_static_html(new_page_path)
            nl_obj = False
            continue
        if line.strip() == "menuItems: {":
            general = True
            nl_obj = True
            print("found")
            continue
        if line.strip == '},\n':
            continue
        # print(line.split(": "))
        if general and len(line.split(":")) == 2 and line.split(":")[1].strip() == '{':
            print("*"*10)
            nl_obj = True
            continue
        if line.strip() == "};\n":
            break
        
    