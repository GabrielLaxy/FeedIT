
def newLevelXP (previousLevel):
    nextLevel = previousLevel * 1.2
    return print("Quntidade de xp ",nextLevel)

# nivel = 10
# for i in range (1, 11):
#     print(f"O nivel {i} tem {nivel} de xp")
#     nivel = newLevelXP(nivel)

def qualNivel(quantXP):
    nivel0 = 10
    newNivel = 0
    while quantXP >= nivel0:
        quantXP = quantXP/1.2
        newNivel += 1
    return print("Nivel ", newNivel)


qualNivel(10)
