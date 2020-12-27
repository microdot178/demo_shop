from django import forms
from .models import Order

class OrderForm(forms.ModelForm):

    class Meta:
        model = Order
        fields = ('items', 'final_price', 'name', 'adress')

f = OrderForm(initial={'items': 'instance'}, auto_id=False)