from django.views.generic import TemplateView
from .models import Footer_text
from .models import Footer_contacts
from .models import Item
from .forms import OrderForm
from django.shortcuts import redirect

class Index(TemplateView):
    template_name = 'shop/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        footer_block_left = Footer_text.objects.get(name='footer_block_left')
        footer_block_center = Footer_text.objects.get(name='footer_block_center')
        contacts = Footer_contacts.objects.get(name='footer_contacts')
        items = Item.objects.all()
        #shop items
        context['items'] = items
        #footer
        context['footer_block_center'] = footer_block_center.text
        context['footer_block_left'] = footer_block_left.text
        context['mail'] = contacts.mail
        context['phone'] = contacts.phone
        context['adress'] = contacts.adress
        #cart
        context['form'] = OrderForm
        return context

    def post(self, request, *args, **kwargs):
        context = self.get_context_data()
        context['form'] = OrderForm
        if context["form"].is_valid:
            form = OrderForm(request.POST)
            post = form.save(commit=False)
            post.save()
            return redirect('/')

        return super(TemplateView, self).render_to_response(context)