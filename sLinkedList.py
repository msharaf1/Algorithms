#Create a Node(an object with two attributes)

class SLNode:
    def __init__(self, value):
        self.value = value
        self.next = None
#create a singly linked list. Define head and the tail.
class SList:
    def __init__(self):
        self.head = None
        self.tail = None
#create an ojbect and insert data.
list = SList()
list.head = SLNode("John")
list.head.next = SLNode("Lila")
list.head.next.next = SLNode("Joni")

#print data from the node
node = list.head
while node:
    print (node.value)
    node = node.next



# #linked list with __iter__

# class Node(object):
#     def __init__(self, value):
#         self.value = value
#         self.next = None
# class SLL(object):
#     def __init__(self):
#         self.head =  None
#         self.tail = None
#     def __iter__(self):
#         node = lList.head
#         while node:
#             yield node
#             node = node.next
#     def ins(self, node):
#         if self.head:
#             self.tail.next = node
#         else:
#             self.head = node
#         self.tail = node
# lList = SLL()
# lList.ins(Node("Jimi"))
# lList.ins(Node("Jacki"))
# lList.ins(Node("Jet Li"))

# print([node.value for node in lList])




class Node:

   def __init__(self,data,nextNode=None):
       self.data = data
       self.nextNode = nextNode

   def getData(self):
       return self.data

   def setData(self,val):
       self.data = val

   def getNextNode(self):
       return self.nextNode

   def setNextNode(self,val):
       self.nextNode = val

class LinkedList:

   def __init__(self,head = None):
       self.head = head
       self.size = 0

   def getSize(self):
       return self.size

   def addNode(self,data):
       newNode = Node(data,self.head)
       self.head = newNode
       self.size+=1
       return True
       
   def printNode(self):
       curr = self.head
       while curr:
           print(curr.data)
           curr = curr.getNextNode()

myList = LinkedList()
print("Inserting")
print(myList.addNode(5))
print(myList.addNode(15))
print(myList.addNode(25))
print("Printing")
myList.printNode()
print("Size")
print(myList.getSize())



